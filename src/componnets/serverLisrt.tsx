import React, { useEffect, useState } from 'react'
import { ServiceType } from '../types/serviceType'
import ServerCard from './ServerCard'

type Props = {
    filterService : ServiceType[];
    onStatusChange: () => void;
}

const ServerLisrt = (props: Props) => {

    return (
        <div>
            <div className="row p-0 m-0">
                {props.filterService.map((service: ServiceType) => (
                    <div key={service.id} className="col-md-3 d-flex justify-content-center mb-4">
                        <ServerCard service={service} onStatusChange={props.onStatusChange}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServerLisrt