import axios from "axios";

export async function fetchAllService() {
    const res = await axios.get("http://localhost:4000/api/v1/service");
    return res.data;
}

export async function updateServiceStatus(id: number, newValue: boolean): Promise<void> {
    await axios.patch(`http://localhost:4000/api/v1/service/status/${id}`, { status: newValue });
}