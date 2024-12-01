import React, { useState } from 'react'
import { ServiceType } from '../types/serviceType';
import './serverCard.css';
import { updateServiceStatus } from '../api/service-cleint copy';

type ServerCardProps = {
    service: ServiceType;
    onStatusChange: () => void;
};

const ServerCard = ({ onStatusChange, service }: ServerCardProps) => {

    const [status, setStatus] = useState(service.status);

    const handleToggle = async () => {
        try {
            await updateServiceStatus(service.id, !status);
            setStatus(prevStatus => !prevStatus);
            onStatusChange()
        } catch (error) {
            console.error("Failed to update service status:", error);
        }
    }

    return (
        <div className="card" style={{width: '100%'}}>
            <div className="card-body m-0">
                <h5 className="card-title">{service.name}</h5>
                <p className="m-0"><b>Created:</b> <br/> {service.createdTime}</p>
                <p className="mt-0"><b>IP Adress:</b> {service.ip}</p>
                <label className="switch">
                    <input type="checkbox" checked={status} onChange={handleToggle}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    )
}

export default ServerCard