import { Appwrite } from 'appwrite'

export const api = new Appwrite();

api.setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT);
api.setProject(process.env.REACT_APP_APPWRITE_PROJECT)