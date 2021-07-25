import React from 'react'
import { withWidth, Hidden, Button } from '@material-ui/core'

const HiddenList = ()=>{
    return (
        <div>
            <Hidden xsDown>
                <Button color='primary'>Xs</Button>
            </Hidden>            
        </div>
    )
}

export default withWidth()(HiddenList)