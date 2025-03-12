const apiPath = 'https://xgl6cacnz7j6mq5anq2fbgxqse0ubvld.lambda-url.us-west-2.on.aws/?prompt=';

export const getMessage = async (message: string) => {
  try {
    const res = await fetch(`${apiPath}${message}`, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      }
    });
    const { response } = await res.json();
    const decodedResponse = new TextDecoder("utf-8").decode(
      new Uint8Array([...response].map(char => char.charCodeAt(0)))
    );
    console.log("response: ", response)
    console.log("Decoded response: ", decodedResponse)
    return response;
  } catch (error) {
    console.log(error);
  }

}