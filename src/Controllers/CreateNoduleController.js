import Tables from '../Models/Tables'
import Nodules from '../Models/Nodules'

class CreateNoduleController {
  constructor() {
    this.nodules = new Nodules()
    this.tables = new Tables()
    this.updatedNodulesEvent = new Event('updateNodules')
  }

  addNewFilterNodule = (props) => {
    const { label, filterType, filterParams, tablesToImportByLabel } = props
    const tables = tablesToImportByLabel.map(label => {
      return this.tables.getTableByLabel(label)
    })

    this.nodules.addNewFilterNodule({
      label,
      filterType,
      filterParams,
      tables
    })
    document.dispatchEvent(this.updatedNodulesEvent)
  }

  addNewJoinNodule = props => {
    const { label, tablesToImportByLabel, joinBy} = props
    const tables = tablesToImportByLabel.map(label => {
      return this.tables.getTableByLabel(label)
    })

    this.nodules.addNewJoinNodule({
      label,
      tables,
      joinBy
    })

    document.dispatchEvent(this.updatedNodulesEvent)
  }

  addNewTransformNodule = props => {
    const { label, tablesToImportByLabel, structure} = props
    const tables = tablesToImportByLabel.map(label => {
      return this.tables.getTableByLabel(label)
    })

    this.nodules.addNewTransformNodule({
      label,
      tables,
      structure
    })
    console.log(this.nodules)
    document.dispatchEvent(this.updatedNodulesEvent)
  }

  deleteNodule = id => {
    this.nodules.removeById(id)
    document.dispatchEvent(this.updatedNodulesEvent)
  }
}

export default CreateNoduleController