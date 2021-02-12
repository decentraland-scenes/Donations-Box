import * as crypto from '@dcl/crypto-scene-utils'
import * as utils from '@dcl/ecs-scene-utils'

export const screenSpaceUI = new UICanvas()
screenSpaceUI.visible = true

const imageTexture = new Texture('images/donations_UI.png')
const scale = 0.55

let donationsBoxModel = new GLTFShape('models/DonationsBox.glb')

export class DonationsBox extends Entity {
  animation: AnimationState
  idleAnimation: AnimationState
  address: string
  defaultAmount: number
  toDonate: number
  background: UIImage
  donationInput: UIInputText
  constructor(
    pos: TranformConstructorArgs,
    address: string,
    defaultAmount: number
  ) {
    super()
    engine.addEntity(this)

    this.addComponent(donationsBoxModel)
    this.addComponent(new Transform(pos))

    this.addComponent(new Animator())

    this.animation = new AnimationState('Donation_Action', { looping: false })
    this.getComponent(Animator).addClip(this.animation)

    this.idleAnimation = new AnimationState('DonationIdle_Action', {
      looping: true,
    })
    this.getComponent(Animator).addClip(this.idleAnimation)
    this.idleAnimation.playing = true

    this.address = address
    this.defaultAmount = defaultAmount
    this.toDonate = defaultAmount

    this.addComponent(
      new OnPointerDown(
        () => {
          this.openUI()
        },
        { hoverText: 'Donate' }
      )
    )

    let background = new UIImage(screenSpaceUI, imageTexture)

    background.name = 'background'
    background.width = 1024 * scale
    background.height = 448 * scale
    background.hAlign = 'center'
    background.vAlign = 'center'
    background.positionY = 0
    background.sourceLeft = 0
    background.sourceTop = 0
    background.sourceWidth = 1024
    background.sourceHeight = 429
    background.visible = false
    background.isPointerBlocker = false

    this.background = background

    this.donationInput = new UIInputText(background)
    this.donationInput.name = 'message'
    this.donationInput.width = 130 * scale
    this.donationInput.height = 50 * scale
    this.donationInput.hAlign = 'center'
    this.donationInput.vAlign = 'center'
    this.donationInput.positionY = 20
    this.donationInput.positionX = -35
    this.donationInput.fontSize = 40 * scale
    this.donationInput.vTextAlign = 'center'
    this.donationInput.hTextAlign = 'center'

    this.donationInput.placeholder = this.toDonate.toString()

    this.donationInput.isPointerBlocker = true
    this.donationInput.visible = true
    this.donationInput.onChanged = new OnChanged((x) => {
      log('on changed value: ', x.value)
      let moneyText: string = x.value
      let moneyNumber: number = parseFloat(moneyText)
      this.toDonate = moneyNumber
    })

    const currentPayment = new UIText(background)
    currentPayment.value = 'MANA'
    currentPayment.name = 'currentPayment'
    currentPayment.width = 200 * scale
    currentPayment.height = 100 * scale
    currentPayment.hAlign = 'center'
    currentPayment.vAlign = 'center'
    currentPayment.positionY = 18
    currentPayment.positionX = 37
    currentPayment.fontSize = 32 * scale
    currentPayment.vTextAlign = 'center'
    currentPayment.hTextAlign = 'center'
    currentPayment.color = Color4.FromHexString('#FF0050FF')

    const AcceptButton = new UIImage(background, imageTexture)
    AcceptButton.name = 'AcceptButton'
    AcceptButton.width = 460 * scale
    AcceptButton.height = 80 * scale
    AcceptButton.hAlign = 'center'
    AcceptButton.vAlign = 'center'
    AcceptButton.positionY = -60
    AcceptButton.positionX = -130
    AcceptButton.sourceLeft = 475
    AcceptButton.sourceTop = 425
    AcceptButton.sourceWidth = 460
    AcceptButton.sourceHeight = 74
    AcceptButton.isPointerBlocker = true
    AcceptButton.onClick = new OnClick(() => {
      this.makeDonation()
      this.closeUI()
    })

    const CancelButton = new UIImage(background, imageTexture)
    CancelButton.name = 'AcceptButton'
    CancelButton.width = 460 * scale
    CancelButton.height = 80 * scale
    CancelButton.hAlign = 'center'
    CancelButton.vAlign = 'center'
    CancelButton.positionY = -60
    CancelButton.positionX = 130
    CancelButton.sourceLeft = 0
    CancelButton.sourceTop = 425
    CancelButton.sourceWidth = 460
    CancelButton.sourceHeight = 74
    CancelButton.isPointerBlocker = true
    CancelButton.onClick = new OnClick(() => {
      this.closeUI()
    })
  }
  public openUI(): void {
    //donatedMoney = 0.058
    this.background.visible = true
    this.background.isPointerBlocker = true

    this.donationInput.visible = true
    this.donationInput.placeholder = this.toDonate.toString()
    this.donationInput.value = this.toDonate.toString()
  }
  public closeUI(): void {
    this.background.visible = false
    this.background.isPointerBlocker = false
  }

  public makeDonation(): void {
    log('MAKING DONATION OF', this.defaultAmount)
    crypto.mana.send(this.address, this.defaultAmount).then(() => {
      this.idleAnimation.stop()
      this.animation.stop()
      this.animation.play()

      this.addComponentOrReplace(
        new utils.Delay(2500, () => {
          this.animation.stop()
          this.idleAnimation.play()
        })
      )
    })
  }
}
