import React, { Component } from 'react';
import EmployeeForm from '../EmployeeForm';
import * as employeeService from 'services/employee';
import * as toast from 'utils/toast';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

class EditEmployee extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        designation: '',
        address: '',
        dob: '',
        designation_value: {},
      },
      id: (props.match.params as any).id,
    };
  }

  componentDidMount() {
    this.fetchById();
  }

  fetchById = async () => {
    try {
      let data = await employeeService.fetchById(this.state.id);
      if (data.designation) {
        data.designation_value = {
          label: data.designation,
          value: data.designation,
        };
      }
      this.setState({
        data,
      });
    } catch (error) {
      toast.error({
        title: 'Error',
        message: error.response.data.error.message,
      });
    }
  };

  render() {
    let { data, id } = this.state;
    return <EmployeeForm data={data} id={id} />;
  }
}

export default EditEmployee;
