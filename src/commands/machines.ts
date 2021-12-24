import axios from 'axios';
import Conf from 'conf';
import { getContextProperty } from '../lib/context';
import { endpoints } from '../lib';

const config = new Conf();

export interface Machine {
  name: string;
  status: string;
  createdAt: string;
  downloadUrl: string;
  serverStatus: string;
  sandboxes: string[];
  url: string;
  wsUrl: string;
}

export const GetMachines = async () => {
  const projectId = getContextProperty('projectId');
  if (!projectId) {
    return console.log("No project set - use 'auth set [[projectId]]' first");
  }

  const key = config.get(`keys.${projectId}`, '') as string;
  const headers = {
    'x-api-key': key,
    'Content-Type': 'application/json',
  };
  return axios.post<Array<Machine>>(
    endpoints.GET_MACHINES,
    {},
    {
      headers,
    }
  );
};

export const ListMachines = async () => {
  try {
    const response = await GetMachines();
    console.log(response?.data);
  } catch (error) {
    console.error(error);
  }
};
