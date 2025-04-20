export interface MockData {
  name: string;
  temperature: number;
  humidity: number;
}

const mockData = [
  { name: 'Jan', temperature: 30, humidity: 50 },
  { name: 'Feb', temperature: 25, humidity: 58 },
  { name: 'Mar', temperature: 28, humidity: 62 },
  { name: 'Apr', temperature: 22, humidity: 59 },
  { name: 'May', temperature: 26, humidity: 65 },
  { name: 'Jun', temperature: 27, humidity: 67 },
  { name: 'Jul', temperature: 29, humidity: 70 },
  { name: 'Aug', temperature: 31, humidity: 68 },
  { name: 'Sep', temperature: 26, humidity: 64 },
  { name: 'Oct', temperature: 21, humidity: 61 },
  { name: 'Nov', temperature: 19, humidity: 57 },
  { name: 'Dec', temperature: 24, humidity: 59 },
];

const monthOrder = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export { mockData, monthOrder };
