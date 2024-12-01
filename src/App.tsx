import React, { useEffect, useState } from 'react'
import Filters from './componnets/filters'
import ServerLisrt from './componnets/serverLisrt'
import { fetchAllService } from './api/service-cleint copy'
import { ServiceType } from './types/serviceType'

type Props = {}

const App = (props: Props) => {

    const [service, setService] = useState<ServiceType[]>([])
    const [filterService, setfilterService] = useState<ServiceType[]>([])



    const fetchServices = () => {
        fetchAllService().then((res) => {
            if (res) {
                setService(res);
                setfilterService(res);
            }
        });
    };

    useEffect(() => {
        fetchServices();
    }, [])

    const handleStatusChange = () => {
        fetchServices();
    };

    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Server Management</h1>
            <Filters service={service} setfilterService={setfilterService} />
            <ServerLisrt filterService={filterService}  onStatusChange={handleStatusChange}/>
        </div>
    )
}

export default App