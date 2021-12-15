import { connect } from "react-redux";
import Content from "./Content";
 
let mapStateToProps = (state) => {
   return {state}
}
const ContentContainer = connect (mapStateToProps)(Content)
 
export default ContentContainer