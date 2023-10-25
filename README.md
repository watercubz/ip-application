
# IP-APPLCATION

"IP Application" is a project that allows users to query and retrieve detailed information about specific IP addresses. Users can input an IP address through a user interface, and, via the application, they will receive geographic data, such as the country, region, and city associated with that IP address. The project utilizes a geolocation service and a third-party API to retrieve and present this information in an easy and accessible manner.

## Acknowledgements

 - [rapiapi](https://rapidapi.com/xakageminato/api/ip-geolocation-ipwhois-io)


## Installation

Install ip-application with git

```bash
  git clone https://ip-application
  cd api-application
```
    
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/json/${ip}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Authors

- [@watercubz](https://github.com/watercubz)


## Feedback

If you have any feedback, please reach out to us at eurysosagarcia@gmail.com


## Support

For support, email eurysosagarcia@gmail.com or join our Slack channel.


## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility


## License

[MIT](https://choosealicense.com/licenses/mit/)

