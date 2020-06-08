import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import Script1 from '../c1da72b5-fbda-4ba5-ad96-a921a3ef0d3b/src/item'

export function buildScene() {
  const _scene = new Entity('_scene')
  engine.addEntity(_scene)
  const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  _scene.addComponentOrReplace(transform)

  const entity = new Entity('entity')
  engine.addEntity(entity)
  entity.setParent(_scene)
  const gltfShape = new GLTFShape(
    'models/FloorBaseGrass_01/FloorBaseGrass_01.glb'
  )
  gltfShape.withCollisions = true
  gltfShape.isPointerBlocker = true
  gltfShape.visible = true
  entity.addComponentOrReplace(gltfShape)
  const transform2 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  entity.addComponentOrReplace(transform2)

  const smallStarMosaicTile = new Entity('smallStarMosaicTile')
  engine.addEntity(smallStarMosaicTile)
  smallStarMosaicTile.setParent(_scene)
  const transform3 = new Transform({
    position: new Vector3(10.600052833557129, 0, 11.026769638061523),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile.addComponentOrReplace(transform3)
  const gltfShape2 = new GLTFShape(
    'models/Floor_Tiles_2M_01/Floor_Tiles_2M_01.glb'
  )
  gltfShape2.withCollisions = true
  gltfShape2.isPointerBlocker = true
  gltfShape2.visible = true
  smallStarMosaicTile.addComponentOrReplace(gltfShape2)

  const exodusBase = new Entity('exodusBase')
  engine.addEntity(exodusBase)
  exodusBase.setParent(_scene)
  const transform4 = new Transform({
    position: new Vector3(8.5, 0, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  exodusBase.addComponentOrReplace(transform4)
  const gltfShape3 = new GLTFShape('models/HTC_Base/HTC_Base.glb')
  gltfShape3.withCollisions = true
  gltfShape3.isPointerBlocker = true
  gltfShape3.visible = true
  exodusBase.addComponentOrReplace(gltfShape3)

  const bigMossyRock = new Entity('bigMossyRock')
  engine.addEntity(bigMossyRock)
  bigMossyRock.setParent(_scene)
  const transform5 = new Transform({
    position: new Vector3(8.34492301940918, 0, 6.976346969604492),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  bigMossyRock.addComponentOrReplace(transform5)
  const gltfShape4 = new GLTFShape(
    'models/RockLargeMoss_01/RockLargeMoss_01.glb'
  )
  gltfShape4.withCollisions = true
  gltfShape4.isPointerBlocker = true
  gltfShape4.visible = true
  bigMossyRock.addComponentOrReplace(gltfShape4)

  const redBicycle = new Entity('redBicycle')
  engine.addEntity(redBicycle)
  redBicycle.setParent(_scene)
  const transform6 = new Transform({
    position: new Vector3(
      7.925111770629883,
      3.541813373565674,
      6.748531818389893
    ),
    rotation: new Quaternion(0, 0, 0.3236430883407593, 0.9461792707443237),
    scale: new Vector3(1, 1, 1),
  })
  redBicycle.addComponentOrReplace(transform6)
  const gltfShape5 = new GLTFShape('models/Bicycle_01/Bicycle_01.glb')
  gltfShape5.withCollisions = true
  gltfShape5.isPointerBlocker = true
  gltfShape5.visible = true
  redBicycle.addComponentOrReplace(gltfShape5)

  const blackTricornHat = new Entity('blackTricornHat')
  engine.addEntity(blackTricornHat)
  blackTricornHat.setParent(_scene)
  const transform7 = new Transform({
    position: new Vector3(
      6.9359636306762695,
      4.237381458282471,
      7.16286563873291
    ),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  blackTricornHat.addComponentOrReplace(transform7)
  const gltfShape6 = new GLTFShape('models/PirateHat_02/PirateHat_02.glb')
  gltfShape6.withCollisions = true
  gltfShape6.isPointerBlocker = true
  gltfShape6.visible = true
  blackTricornHat.addComponentOrReplace(gltfShape6)

  const hardHat = new Entity('hardHat')
  engine.addEntity(hardHat)
  hardHat.setParent(_scene)
  const transform8 = new Transform({
    position: new Vector3(
      7.09410285949707,
      4.228394508361816,
      6.328909397125244
    ),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  hardHat.addComponentOrReplace(transform8)
  const gltfShape7 = new GLTFShape(
    'models/ConstructionHat_01/ConstructionHat_01.glb'
  )
  gltfShape7.withCollisions = true
  gltfShape7.isPointerBlocker = true
  gltfShape7.visible = true
  hardHat.addComponentOrReplace(gltfShape7)

  const pineapple = new Entity('pineapple')
  engine.addEntity(pineapple)
  pineapple.setParent(_scene)
  const transform9 = new Transform({
    position: new Vector3(
      8.227413177490234,
      4.179879188537598,
      6.675386905670166
    ),
    rotation: new Quaternion(
      0.6708388924598694,
      2.9603538926324148e-15,
      -7.997022777317397e-8,
      0.7416031956672668
    ),
    scale: new Vector3(1, 1.0000091791152954, 1.0000091791152954),
  })
  pineapple.addComponentOrReplace(transform9)
  const gltfShape8 = new GLTFShape(
    'models/FoodPineapple_01/FoodPineapple_01.glb'
  )
  gltfShape8.withCollisions = true
  gltfShape8.isPointerBlocker = true
  gltfShape8.visible = true
  pineapple.addComponentOrReplace(gltfShape8)

  const treehouse = new Entity('treehouse')
  engine.addEntity(treehouse)
  treehouse.setParent(_scene)
  const transform10 = new Transform({
    position: new Vector3(
      7.653783798217773,
      4.356611251831055,
      6.759873390197754
    ),
    rotation: new Quaternion(0, 0, 0.22944684326648712, 0.9733211994171143),
    scale: new Vector3(
      0.13905857503414154,
      0.13905857503414154,
      0.13905858993530273
    ),
  })
  treehouse.addComponentOrReplace(transform10)
  const gltfShape9 = new GLTFShape('models/TreeHouse_01/TreeHouse_01.glb')
  gltfShape9.withCollisions = true
  gltfShape9.isPointerBlocker = true
  gltfShape9.visible = true
  treehouse.addComponentOrReplace(gltfShape9)

  const fireHydrant = new Entity('fireHydrant')
  engine.addEntity(fireHydrant)
  fireHydrant.setParent(_scene)
  const transform11 = new Transform({
    position: new Vector3(
      7.476778030395508,
      3.913282871246338,
      7.0745978355407715
    ),
    rotation: new Quaternion(
      -0.6561812162399292,
      2.2000484370892455e-15,
      7.822289660452952e-8,
      0.754603385925293
    ),
    scale: new Vector3(1, 1, 1),
  })
  fireHydrant.addComponentOrReplace(transform11)
  const gltfShape10 = new GLTFShape('models/FireHydrant_01/FireHydrant_01.glb')
  gltfShape10.withCollisions = true
  gltfShape10.isPointerBlocker = true
  gltfShape10.visible = true
  fireHydrant.addComponentOrReplace(gltfShape10)

  const constructionCone = new Entity('constructionCone')
  engine.addEntity(constructionCone)
  constructionCone.setParent(_scene)
  const transform12 = new Transform({
    position: new Vector3(
      8.642478942871094,
      3.720047950744629,
      6.743607044219971
    ),
    rotation: new Quaternion(0, 0, -0.24345248937606812, 0.9699128270149231),
    scale: new Vector3(0.9999990463256836, 0.9999990463256836, 1),
  })
  constructionCone.addComponentOrReplace(transform12)
  const gltfShape11 = new GLTFShape(
    'models/ConstructionCone_01/ConstructionCone_01.glb'
  )
  gltfShape11.withCollisions = true
  gltfShape11.isPointerBlocker = true
  gltfShape11.visible = true
  constructionCone.addComponentOrReplace(gltfShape11)

  const streetMailbox = new Entity('streetMailbox')
  engine.addEntity(streetMailbox)
  streetMailbox.setParent(_scene)
  const transform13 = new Transform({
    position: new Vector3(
      8.055581092834473,
      4.899134159088135,
      6.7307820320129395
    ),
    rotation: new Quaternion(
      0.797650933265686,
      0.6026478409767151,
      -0.022571535781025887,
      0.007694894913583994
    ),
    scale: new Vector3(
      1.0000251531600952,
      1.000025987625122,
      1.0000176429748535
    ),
  })
  streetMailbox.addComponentOrReplace(transform13)
  const gltfShape12 = new GLTFShape('models/MailPost_01/MailPost_01.glb')
  gltfShape12.withCollisions = true
  gltfShape12.isPointerBlocker = true
  gltfShape12.visible = true
  streetMailbox.addComponentOrReplace(gltfShape12)

  const soccerBall = new Entity('soccerBall')
  engine.addEntity(soccerBall)
  soccerBall.setParent(_scene)
  const transform14 = new Transform({
    position: new Vector3(
      7.697266578674316,
      6.081168174743652,
      6.973837852478027
    ),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(
      0.7361947894096375,
      0.7573351263999939,
      1.0583322048187256
    ),
  })
  soccerBall.addComponentOrReplace(transform14)
  const gltfShape13 = new GLTFShape(
    'models/PlaygroundBall_01/PlaygroundBall_01.glb'
  )
  gltfShape13.withCollisions = true
  gltfShape13.isPointerBlocker = true
  gltfShape13.visible = true
  soccerBall.addComponentOrReplace(gltfShape13)

  const constructionLadder = new Entity('constructionLadder')
  engine.addEntity(constructionLadder)
  constructionLadder.setParent(_scene)
  const transform15 = new Transform({
    position: new Vector3(8.168024063110352, 4.95, 6.8478217124938965),
    rotation: new Quaternion(
      -4.222302077746302e-17,
      0.16147533059120178,
      -1.924935588704102e-8,
      0.9868767857551575
    ),
    scale: new Vector3(0.9999996423721313, 1, 0.9999996423721313),
  })
  constructionLadder.addComponentOrReplace(transform15)
  const gltfShape14 = new GLTFShape(
    'models/ConstructionLadder_01/ConstructionLadder_01.glb'
  )
  gltfShape14.withCollisions = true
  gltfShape14.isPointerBlocker = true
  gltfShape14.visible = true
  constructionLadder.addComponentOrReplace(gltfShape14)

  const classroomChair = new Entity('classroomChair')
  engine.addEntity(classroomChair)
  classroomChair.setParent(_scene)
  const transform16 = new Transform({
    position: new Vector3(7.639830112457275, 5.38, 6.700704097747803),
    rotation: new Quaternion(0, 0, -0.5815821290016174, 0.813487708568573),
    scale: new Vector3(1, 1, 1),
  })
  classroomChair.addComponentOrReplace(transform16)
  const gltfShape15 = new GLTFShape('models/Chair_02/Chair_02.glb')
  gltfShape15.withCollisions = true
  gltfShape15.isPointerBlocker = true
  gltfShape15.visible = true
  classroomChair.addComponentOrReplace(gltfShape15)

  const redFish = new Entity('redFish')
  engine.addEntity(redFish)
  redFish.setParent(_scene)
  const transform17 = new Transform({
    position: new Vector3(
      8.362448692321777,
      3.6637864112854004,
      7.084746360778809
    ),
    rotation: new Quaternion(
      -0.35617244243621826,
      0.5057852268218994,
      0.34137439727783203,
      -0.7076624035835266
    ),
    scale: new Vector3(
      1.0000019073486328,
      0.9999997615814209,
      1.0000028610229492
    ),
  })
  redFish.addComponentOrReplace(transform17)
  const gltfShape16 = new GLTFShape('models/Fish_02/Fish_02.glb')
  gltfShape16.withCollisions = true
  gltfShape16.isPointerBlocker = true
  gltfShape16.visible = true
  redFish.addComponentOrReplace(gltfShape16)

  const anvil = new Entity('anvil')
  engine.addEntity(anvil)
  anvil.setParent(_scene)
  const transform18 = new Transform({
    position: new Vector3(
      7.7743635177612305,
      6.421475887298584,
      6.972078323364258
    ),
    rotation: new Quaternion(
      -3.689186886108285e-16,
      0.14545948803424835,
      -1.7340116897912594e-8,
      0.9893642663955688
    ),
    scale: new Vector3(1, 1, 1),
  })
  anvil.addComponentOrReplace(transform18)
  const gltfShape17 = new GLTFShape('models/Anvil_01/Anvil_01.glb')
  gltfShape17.withCollisions = true
  gltfShape17.isPointerBlocker = true
  gltfShape17.visible = true
  anvil.addComponentOrReplace(gltfShape17)

  const smallStarMosaicTile2 = new Entity('smallStarMosaicTile2')
  engine.addEntity(smallStarMosaicTile2)
  smallStarMosaicTile2.setParent(_scene)
  smallStarMosaicTile2.addComponentOrReplace(gltfShape2)
  const transform19 = new Transform({
    position: new Vector3(8.600052833557129, 0, 11.026769638061523),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile2.addComponentOrReplace(transform19)

  const smallStarMosaicTile3 = new Entity('smallStarMosaicTile3')
  engine.addEntity(smallStarMosaicTile3)
  smallStarMosaicTile3.setParent(_scene)
  smallStarMosaicTile3.addComponentOrReplace(gltfShape2)
  const transform20 = new Transform({
    position: new Vector3(6.600052833557129, 0, 11.026769638061523),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile3.addComponentOrReplace(transform20)

  const smallStarMosaicTile4 = new Entity('smallStarMosaicTile4')
  engine.addEntity(smallStarMosaicTile4)
  smallStarMosaicTile4.setParent(_scene)
  smallStarMosaicTile4.addComponentOrReplace(gltfShape2)
  const transform21 = new Transform({
    position: new Vector3(6.600052833557129, 0, 9.026769638061523),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile4.addComponentOrReplace(transform21)

  const smallStarMosaicTile5 = new Entity('smallStarMosaicTile5')
  engine.addEntity(smallStarMosaicTile5)
  smallStarMosaicTile5.setParent(_scene)
  smallStarMosaicTile5.addComponentOrReplace(gltfShape2)
  const transform22 = new Transform({
    position: new Vector3(6.600052833557129, 0, 7.026769638061523),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile5.addComponentOrReplace(transform22)

  const smallStarMosaicTile6 = new Entity('smallStarMosaicTile6')
  engine.addEntity(smallStarMosaicTile6)
  smallStarMosaicTile6.setParent(_scene)
  smallStarMosaicTile6.addComponentOrReplace(gltfShape2)
  const transform23 = new Transform({
    position: new Vector3(6.600052833557129, 0, 5.026769638061523),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile6.addComponentOrReplace(transform23)

  const smallStarMosaicTile7 = new Entity('smallStarMosaicTile7')
  engine.addEntity(smallStarMosaicTile7)
  smallStarMosaicTile7.setParent(_scene)
  smallStarMosaicTile7.addComponentOrReplace(gltfShape2)
  const transform24 = new Transform({
    position: new Vector3(8.5, 0, 5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile7.addComponentOrReplace(transform24)

  const smallStarMosaicTile8 = new Entity('smallStarMosaicTile8')
  engine.addEntity(smallStarMosaicTile8)
  smallStarMosaicTile8.setParent(_scene)
  smallStarMosaicTile8.addComponentOrReplace(gltfShape2)
  const transform25 = new Transform({
    position: new Vector3(10.5, 0, 5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile8.addComponentOrReplace(transform25)

  const smallStarMosaicTile9 = new Entity('smallStarMosaicTile9')
  engine.addEntity(smallStarMosaicTile9)
  smallStarMosaicTile9.setParent(_scene)
  smallStarMosaicTile9.addComponentOrReplace(gltfShape2)
  const transform26 = new Transform({
    position: new Vector3(12.5, 0, 5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile9.addComponentOrReplace(transform26)

  const smallStarMosaicTile10 = new Entity('smallStarMosaicTile10')
  engine.addEntity(smallStarMosaicTile10)
  smallStarMosaicTile10.setParent(_scene)
  smallStarMosaicTile10.addComponentOrReplace(gltfShape2)
  const transform27 = new Transform({
    position: new Vector3(12.5, 0, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile10.addComponentOrReplace(transform27)

  const smallStarMosaicTile11 = new Entity('smallStarMosaicTile11')
  engine.addEntity(smallStarMosaicTile11)
  smallStarMosaicTile11.setParent(_scene)
  smallStarMosaicTile11.addComponentOrReplace(gltfShape2)
  const transform28 = new Transform({
    position: new Vector3(12.5, 0, 9),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile11.addComponentOrReplace(transform28)

  const smallStarMosaicTile12 = new Entity('smallStarMosaicTile12')
  engine.addEntity(smallStarMosaicTile12)
  smallStarMosaicTile12.setParent(_scene)
  smallStarMosaicTile12.addComponentOrReplace(gltfShape2)
  const transform29 = new Transform({
    position: new Vector3(12.5, 0, 11),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  smallStarMosaicTile12.addComponentOrReplace(transform29)

  const squareSignpost = new Entity('squareSignpost')
  engine.addEntity(squareSignpost)
  squareSignpost.setParent(_scene)
  const transform30 = new Transform({
    position: new Vector3(5, 0, 12),
    rotation: new Quaternion(
      -6.236331743169569e-15,
      0.999313235282898,
      -1.1912741371133961e-7,
      -0.037055909633636475
    ),
    scale: new Vector3(1.0000048875808716, 1, 1.0000048875808716),
  })
  squareSignpost.addComponentOrReplace(transform30)

  const bush = new Entity('bush')
  engine.addEntity(bush)
  bush.setParent(_scene)
  const transform31 = new Transform({
    position: new Vector3(11.5, 0, 13.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  bush.addComponentOrReplace(transform31)
  const gltfShape18 = new GLTFShape('models/Bush_02/Bush_02.glb')
  gltfShape18.withCollisions = true
  gltfShape18.isPointerBlocker = true
  gltfShape18.visible = true
  bush.addComponentOrReplace(gltfShape18)

  const squareWoodTable = new Entity('squareWoodTable')
  engine.addEntity(squareWoodTable)
  squareWoodTable.setParent(_scene)
  const transform32 = new Transform({
    position: new Vector3(6.5, 0, 12),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  squareWoodTable.addComponentOrReplace(transform32)
  const gltfShape19 = new GLTFShape('models/Table_03/Table_03.glb')
  gltfShape19.withCollisions = true
  gltfShape19.isPointerBlocker = true
  gltfShape19.visible = true
  squareWoodTable.addComponentOrReplace(gltfShape19)

  const channelId = Math.random().toString(16).slice(2)
  const channelBus = new MessageBus()

  const script1 = new Script1()
  script1.init()
  script1.spawn(
    squareSignpost,
    { text: 'Support the\nartist\n', fontSize: 20 },
    createChannel(channelId, squareSignpost, channelBus)
  )
}
