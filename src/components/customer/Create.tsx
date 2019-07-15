import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface Ivalues {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    address: string,
    description: string
}

export interface IFormState {
    [key: string]: any,
    values: Ivalues[],
    submitSuccess: boolean,
    loading: boolean
}