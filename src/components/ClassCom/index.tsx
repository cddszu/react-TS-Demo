import { connect } from 'react-redux'
import Component from './component'
import { setCount } from 'store/modules/count'

const mapDispatchToProps = {
  setCount
}

const mapStateToProps = (state :{[propName: string]: any;}) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
