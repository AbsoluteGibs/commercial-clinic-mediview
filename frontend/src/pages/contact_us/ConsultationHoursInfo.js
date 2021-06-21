import React from 'react'
import './ConsultationHoursTable.css'

function ConsultationHoursInfo()
{
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <table>
                <tbody>
                    <tr style={{height: "23px"}}>
                        <td style={{height: "23px", width: "300px", borderWidth: '1px 0'}}>Days</td>
                        <td style={{height: "23px", width: "154px", borderWidth: '1px 0'}}>Available Hours</td>
                    </tr>
                    <tr style={{height: "93px"}}>
                        <td style={{height: "93px", width: "300px", borderWidth: '1px 0'}}>Monday, Tuesday</td>
                        <td style={{height: "93px", width: "154px", borderWidth: '1px 0'}}>
                            <p>8.30am - 12.30pm,</p>
                            <p>2.00pm - 4.00pm,</p>
                            <p>7.00pm - 9.00pm</p>
                        </td>
                    </tr>
                    <tr style={{height: "23px"}}>
                        <td style={{height: "23px", width: "300px", borderWidth: '1px 0'}}>Wednesday, Thursday, Friday</td>
                        <td style={{height: "23px", width: "154px", borderWidth: '1px 0'}}>
                            <p>8.30am - 12.30pm,</p>
                            <p>2.00pm - 5.00pm</p>
                        </td>
                    </tr>
                    <tr style={{height: "23px"}}>
                        <td style={{height: "23px", width: "300px", borderWidth: '1px 0'}}>Saturday</td>
                        <td style={{height: "23px", width: "154px", borderWidth: '1px 0'}}>8.30am - 12.30pm</td>
                    </tr>
                </tbody>
            </table>
            <p><i>*Clinic is closed on Sundays and Public Holidays.</i></p>
        </div>
    )
}

export default ConsultationHoursInfo