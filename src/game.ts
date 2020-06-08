import { DonationsBox } from './donationsBox'
import { buildScene } from './builderContent'

buildScene()

let box = new DonationsBox(
  { position: new Vector3(6.5, 0.98, 12), rotation: Quaternion.Euler(0, 0, 0) },
  '0xe2b6024873d218B2E83B462D3658D8D7C3f55a18',
  10
)
