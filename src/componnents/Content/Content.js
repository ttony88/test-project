import React from "react";
import classes from "./Content.module.css"

const Content = (props) => {
    return <>
        <div className={classes.content}>
            {props.state.content.map (e => {
                if(e.type == 'panel') {
                    return <div className={classes.panel} 
                    style={{width: e.props.width, height: e.props.height, 
                          display: e.props.visible ? 'block' : 'none'}}>
                        {e.content.map (e => {
                            if (e.type == 'label') {
                                return <span style={{display: e.props.visible ? 'inline' : 'none'}}>
                                       {e.props.caption}</span>
                            }
                            else if (e.type == 'button') {
                                return <button
                                style={{width: e.props.width, height: e.props.height,
                                      display: e.props.visible ? 'block' : 'none'}}>push</button>
                            }
            
                        })}
                    </div>
                }
                else if (e.type == 'label') {
                    return <span style={{display: e.props.visible ? 'inline' : 'none'}}>{e.props.caption}</span>
                }
                else if (e.type == 'button') {
                    return <button
                    style={{width: e.props.width, height: e.props.height,
                          display: e.props.visible ? 'inline' : 'none'}}>push</button>
                }

            })}
        </div> 
    </>
}

export default Content