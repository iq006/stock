exports.handler = async function () {
  try {
    const response = await fetch("https://upgrader.cc/api/stock", {
      method: "GET",
      headers: {
        "X-API-Key": "SKRIV_API_KEY_HER"
      }
    });

    const text = await response.text();

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          error: "Upgrader API error",
          status: response.status,
          response: text
        })
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: text
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "Kunne ikke hente stock",
        message: error.message
      })
    };
  }
};
