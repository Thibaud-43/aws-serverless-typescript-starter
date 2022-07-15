interface Response {
  statusCode: number;
  body: string;
  headers: {
    'Access-Control-Allow-Origin': string;
  };
}
const hello = (): string => 'hello';

const handler = async (): Promise<Response> => {
  const response = {
    statusCode: 200,
    body: hello(),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
  return response;
};
export { handler, hello };
