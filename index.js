console.log('Loading function');

exports.handler = function(event, context, callback) {

    let message = event.Records[0].Sns.Message;
    console.log('Message received from SNS:', message);

    let arr = message.split("_");
    console.log(arr);

    
    let fromAddress=arr[0];
    let toAddress=arr[1];
    let link=arr[2];
      var params = {
        Destination: {
          ToAddresses: [toAddress],
        },
        Message: {
          Body: {
            Text: { Data: "please click this link to verify- "+link },
          },
    
          Subject: { Data: "Test Email" },
        },
        Source: fromAddress,
      };
     
      await ses.sendEmail(params).promise();
    callback(null, "Success");

};