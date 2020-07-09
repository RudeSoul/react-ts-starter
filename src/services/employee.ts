import config from '../config';
import http from '../utils/http';

export interface EmployeeFetchOptions {
  firstName?: string;
}

export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  designation: string;
}

/**
 * Fetch all employees.
 *
 * @param {{firstName: string}} options
 * @returns {object}
 */
export async function fetchEmployees(options: EmployeeFetchOptions = {}) {
  const employees = await http.get(config.endpoints.employee, {
    retryCount: 5,
    params: {
      firstName_like: options.firstName,
    },
  });

  return employees;
}

/**
 * Save an employee.
 *
 * @param {object} employee
 * @returns {object}
 */
export async function save(employee: Employee) {
  const response = await http.post(config.endpoints.employee, employee);

  return response.data;
}

/**
 * Update an employee.
 *
 * @param {object} employee
 * @returns {object}
 */
export async function update(employee: Employee) {
  const response = await http.put(`${config.endpoints.employee}/${employee.id}`, employee);

  return response.data;
}

/**
 * Fetch employee by id.
 *
 * @param {string} id
 * @returns {object}
 */
export async function fetchById(id: string) {
  const response = await http.get(`${config.endpoints.employee}/${id}`);

  return response.data;
}
