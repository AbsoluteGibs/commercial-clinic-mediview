import React from 'react'

function PreEventART()
{
    return(
        <div>
            <table style={{width: '70%'}}>
                <tbody>
                    <tr style={{height: '23px'}}>
                        <td style={{width: '430px', height: '23px'}}></td>
                        <td style={{width: '236px', height: '23px', textAlign: 'center'}} colSpan={2}><b>Maximum number of attendees</b></td>
                    </tr>
                    <tr style={{height: '43px'}}>
                        <td style={{width: '430px', height: '43px'}}></td>
                        <td style={{width: '150px', height: '43px', backgroundColor: '#FDF0A6', border: 'groove 1px'}}><b>Without Pre-Event Testing</b></td>
                        <td style={{width: '136px', height: '43px', backgroundColor: '#F9E7FB', border: 'groove 1px'}}><b>With Pre-Event Testing</b></td>
                    </tr>
                    <tr style={{height: '33px'}}>
                        <td style={{width: '430px', height: '33px', backgroundColor: '#E2E3E3', border: 'groove 1px'}} colSpan={3}><b>Non-wedding Events</b></td>
                    </tr>
                    <tr style={{height: '23px'}}>
                        <td style={{width: '430px', height: '23px', backgroundColor: '#E8F2FB', border: 'groove 1px'}}>MICE (including consumer tradeshows)</td>
                        <td style={{width: '150px', height: '69px', textAlign: 'center', backgroundColor: '#FDF0A6', border: 'groove 1px'}} rowSpan={3}>
                            <div style={{fontSize: '20px'}}><b>100</b></div>
                        </td>
                        <td style={{width: '150px', height: '23px', textAlign: 'center', backgroundColor: '#F9E7FB', border: 'groove 1px'}} rowSpan={3}>
                            <div style={{fontSize: '20px'}}><b>250</b></div>
                        </td>
                    </tr>
                    <tr style={{height: '23px'}}>
                        <td style={{width: '430px', height: '23px', backgroundColor: '#E8F2FB', border: 'groove 1px'}}>Live performances (seated audience), Pilot spectator sports event</td>
                    </tr>
                    <tr style={{height: '23px'}}>
                        <td style={{width: '430px', height: '23px', backgroundColor: '#E8F2FB', border: 'groove 1px'}}>Worship services</td>
                    </tr>
                    <tr style={{height: '43px'}}>
                        <td style={{width: '430px', height: '43px', backgroundColor: '#E2E3E3', border: 'groove 1px'}} colSpan={3}><b>Wedding Events (numbers includes bride and groom)</b></td>
                    </tr>
                    <tr style={{height: '23px'}}>
                        <td style={{width: '430px', height: '23px', backgroundColor: '#E8F2FB', border: 'groove 1px'}}>Solemnisation only</td>
                        <td style={{width: '150px', height: '69px', textAlign: 'center', backgroundColor: '#FDF0A6', border: 'groove 1px'}} rowSpan={3}>
                            <div style={{fontSize: '20px'}}><b>50</b></div>
                        </td>
                        <td style={{width: '136px', height: '23px', textAlign: 'center', backgroundColor: '#F9E7FB', border: 'groove 1px'}}>
                            <div style={{fontSize: '20px'}}><b>250</b></div>
                            <div>Test required only for bride and groom (if unvaccinated)</div>
                        </td>
                    </tr>
                    <tr style={{height: '23px'}}>
                        <td style={{width: '430px', height: '23px', backgroundColor: '#E8F2FB', border: 'groove 1px'}}>Solemnisation combined with wedding reception</td>
                        <td style={{width: '136px', height: '23px', textAlign: 'center', backgroundColor: '#F9E7FB', border: 'groove 1px'}} rowSpan={2}>
                            <div style={{fontSize: '20px'}}><b>250</b></div>
                            <div>Test required for <b>all</b> unvaccinated attendees</div>
                        </td>
                    </tr>
                    <tr style={{height: '23px'}}>
                        <td style={{width: '430px', height: '23px', backgroundColor: '#E8F2FB', border: 'groove 1px'}}>Wedding reception only</td>
                    </tr>
                </tbody>
            </table>
            <i>*Information accurate as of 5 May 2021</i>
        </div>
    )
}

export default PreEventART