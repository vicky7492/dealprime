import React from "react";
import { useAlert } from 'react-alert'

export const Alert=()=>{
    const alert=useAlert();
    return alert.show('i  m  alerted')
};