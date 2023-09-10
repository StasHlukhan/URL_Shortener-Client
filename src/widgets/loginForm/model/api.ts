/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { IUser } from './types';
import { notify } from 'shared/ui/theme/notification';

export default class UserService {
  static async loginUser({ username, password }: IUser) {
    try{
      const response = await axios.post('https://localhost:7134/api/Auth/user/login', {
      username:username,
      password:password,
    });
    notify({message:"Login is successful",type:200})
    console.log(response)
    return response
    }catch(e){
      notify({message:"Login is failes",type:1000})
    }
    
  }

}
