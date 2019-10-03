const orderTracking = [
    {
      "_id": "5d863b337f7c2a23bdf67bff",
      "index": 0,
      "image": "https://picsum.photos/id/1/300",
      "name": "Chuck Taylor - Converse",
      "address": "784 Imlay Street, Jacumba, Montana, 5537",
      "ordered": "2018-11-07T10:04:01 -00:00",
      "tracking" : {
          "locationLog": [
            {
              'status': 'Order received',
              'message': 'We have receieved your order.',
              'time':'2018-11-07T10:04:01 -12:00'
            },
            {
              'status': 'Preparing',
              'message': 'One of our operatives is preparing your order.',
              'time':'2018-11-07T10:04:01 -14:00'
            },
            {
              'status': 'Dispatched',
              'message': 'Your order has been dispatched from our Waltham Forest warehouse.',
              'time':'2018-11-07T10:04:01 -16:00'
            },
            {
              'status': 'Local depot',
              'message': 'We have received your order at your local depot.',
              'time':'2018-11-07T10:04:01 -17:00'
            },
            {
              'status': 'Out for delivery',
              'message': 'Your local delivery driver will deliver your parcel today.',
              'time':'2018-11-07T10:04:01 -17:00'
            },
          ],
          "journey-completed" : "83",
          "estimated-arrival" : "2018-11-09",
      }
    },
    {
      "_id": "5d863b3349949bee128647a1",
      "index": 1,
      "image": "https://picsum.photos/id/4/300",
      "name": "Nike Air Force",
      "address": "952 Anthony Street, Indio, Illinois, 8501",
      "ordered": "2014-08-16T12:48:49 -01:00",
      "tracking" : {
        "locationLog": [
          {
            'status': 'Order received',
            'message': 'We have receieved your order.',
            'time':'2014-11-07T10:04:01 -12:00'
          },
          {
            'status': 'Preparing',
            'message': 'One of our operatives is preparing your order.',
            'time':'2014-11-07T10:04:01 -14:00'
          }
        ],
        "journey-completed" : "33",
        "estimated-arrival" : "2014-08-15",
    }
    },
    {
      "_id": "5d863b33fd58b069caa50495",
      "index": 2,
      "image": "https://picsum.photos/id/7/300",
      "name": "Vans Old Skool",
      "address": "239 Kingsland Avenue, Vincent, American Samoa, 2708",
      "ordered": "2019-03-23T01:32:48 -00:00",
      "tracking" : {
        "locationLog": [
          {
            'status': 'Order received',
            'message': 'We have receieved your order.',
            'time':'2018-11-07T10:04:01 -12:00'
          },
          {
            'status': 'Preparing',
            'message': 'One of our operatives is preparing your order.',
            'time':'2018-11-07T10:04:01 -14:00'
          },
          {
            'status': 'Dispatched',
            'message': 'Your order has been dispatched from our Waltham Forest warehouse.',
            'time':'2018-11-07T10:04:01 -16:00'
          },
          {
            'status': 'Local depot',
            'message': 'We have received your order at your local depot.',
            'time':'2018-11-07T10:04:01 -17:00'
          },
          {
            'status': 'Out for delivery',
            'message': 'Your local delivery driver will deliver your parcel today.',
            'time':'2018-11-07T10:04:01 -17:00'
          },
          {
            'status': 'Delivered!',
            'message': 'Your parcel was handed to Joe Bloggs.',
            'time':'2018-11-07T10:04:01 -17:00'
          },
        ],
        "journey-completed" : "100",
        "estimated-arrival" : "2019-03-25",
    }
    },
    {
      "_id": "5d863b33b82e725211c7cbb7",
      "index": 3,
      "image": "https://picsum.photos/id/15/300",
      "name": "Nike Airforce",
      "address": "511 Sands Street, Dahlen, Palau, 6358",
      "ordered": "2019-05-08T11:25:50 -01:00",
      "tracking" : {
        "locationLog": [
          {
            'status': 'Order received',
            'message': 'We have receieved your order.',
            'time':'2018-11-07T10:04:01 -12:00'
          },
        ],
        "journey-completed" : "16",
        "estimated-arrival" : "2019-05-11",
    }
    }
  ]

  export default orderTracking;