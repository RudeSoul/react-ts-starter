import React, { Component } from 'react';
import EmployeeForm from '../EmployeeForm';

interface Props {}

interface State {
  data: EmployeeData;
}

export interface EmployeeData {
  firstName: string;
  lastName: string;
  designation: string;
  address: string;
  dob: string;
}

class AddEmployee extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        designation: '',
        address: '',
        dob: '',
      },
    };
  }

  render() {
    let { data } = this.state;
    return <EmployeeForm data={data} />;
  }
}

export default AddEmployee;
