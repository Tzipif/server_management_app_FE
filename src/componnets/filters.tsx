import React, { useState, useEffect } from 'react'
import { ServiceType } from '../types/serviceType'

type Props = {
    service: ServiceType[];
    setfilterService: React.Dispatch<React.SetStateAction<ServiceType[]>>
}

const Filters = (p: Props) => {

    const [orderBy, setOrderBy] = useState(false)
    const [showOnlyOn, setShowOnlyOn] = useState(false)

    const handelFilterStatusOn = () => {
        setShowOnlyOn(!showOnlyOn);
        const filteredServers = p.service.filter((s) => {
            return !showOnlyOn ? s.status : s;
        })
        p.setfilterService(filteredServers)
    }

    const handelFilterOrderBy = () => {
        setOrderBy(!orderBy);
        const sortedServers = [...p.service].sort((a, b) => {
            const dateA = new Date(a.createdTime);
            const dateB = new Date(b.createdTime);
    
            return orderBy ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
        });
        const filteredServers = sortedServers.filter((s) => {
            return showOnlyOn ? s.status : s;
        })
        p.setfilterService(filteredServers);
    }


    return (
        <div className='d-flex justify-content-center my-5'>
            <div className="form-check me-3">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" checked={orderBy} onChange={handelFilterOrderBy}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Order from last to first created
                </label>
            </div>
            <div className="form-check me-3">
                <input className="form-check-input" type="checkbox" id="flexCheckChecked" checked={showOnlyOn} onChange={handelFilterStatusOn} />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Show only active servers
                </label>
            </div>
        </div>
    )
}

export default Filters