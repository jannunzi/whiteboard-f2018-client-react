import React from 'react'
import {connect} from 'react-redux'
import WidgetList from "../components/WidgetList";

const stateToProperties = state =>({
  widgets: state.widgets
})

const WidgetListContainer = connect
(stateToProperties)(WidgetList)

export default WidgetListContainer