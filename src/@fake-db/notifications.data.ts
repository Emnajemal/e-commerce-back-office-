export class NotificationsFakeData {
  public static data = {
    messages: [
      {
        image: 'assets/images/portrait/small/avatar-s-15.jpg',
        heading: '<span class="font-weight-bolder">Congratulation Sam 🎉</span> winner!',
        text: 'Won the monthly best seller badge.'
      },
      {
        image: 'assets/images/portrait/small/avatar-s-3.jpg',
        heading: '<span class="font-weight-bolder">New message</span>  received',
        text: 'You have 10 unread messages'
      },
      {
        image: 'assets/images/portrait/small/avatar-s-12.jpg',
        heading: '<span class="font-weight-bolder">Revised Order 👋</span>  checkout',
        text: 'MD Inc. order updated'
      }
    ],
    systemMessages: [
      {
        icon: 'x',
        heading: '<span class="font-weight-bolder">Server down</span> registered',
        text: 'USA Server is down due to hight CPU usage'
      },
      {
        icon: 'check',
        heading: '<span class="font-weight-bolder">Sales report</span> generated',
        text: 'Last month sales report generated'
      },
      {
        icon: 'alert-triangle',
        heading: '<span class="font-weight-bolder">High memory</span> usage',
        text: 'BLR Server using high memory'
      }
    ],
    system: true
  };
}
