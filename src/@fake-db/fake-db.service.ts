import { InMemoryDbService } from 'angular-in-memory-web-api';

import { accountSettingsFakeData } from '@fake-db/account-settings.data';
import { BlogFakeData } from '@fake-db/blog.data';
import { CalendarFakeData } from '@fake-db/calendar.data';
import { CardAnalyticsData } from '@fake-db/card-analytics.data';
import { CardStatisticsData } from '@fake-db/card-statistics.data';
import { ChatWidgetFakeData } from '@fake-db/chat-widget.data';
import { ChatFakeData } from '@fake-db/chat.data';
import { DashboardFakeData } from '@fake-db/dashboard.data';
import { DatatableFakeData } from '@fake-db/datatables';
import { EcommerceFakeData } from '@fake-db/ecommerce.data';
import { EmailFakeData } from '@fake-db/email.data';
import { FAQFakeData } from '@fake-db/faq.data';
import { InvoiceFakeData } from '@fake-db/invoice.data';
import { KBFakeData } from '@fake-db/knowledge-base.data';
import { NotificationsFakeData } from '@fake-db/notifications.data';
import { PricingFakeData } from '@fake-db/pricing.data';
import { ProfileFakeData } from '@fake-db/profile.data';
import { SearchFakeData } from '@fake-db/search.data';
import { TodoFakeData } from '@fake-db/todo.data';
import { UsersFakeData } from '@fake-db/users.data';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Data-table
      'datatable-rows': DatatableFakeData.rows,

      // Account Settings
      'account-settings-data': accountSettingsFakeData.data,

      // Knowledge Base
      'knowledge-base-data': KBFakeData.data,

      // Faq
      'faq-data': FAQFakeData.data,

      // Pricing
      'pricing-data': PricingFakeData.data,

      // Blog
      'blog-data': BlogFakeData.data,

      // Profile
      'profile-data': ProfileFakeData.data,

      // Card Statistics
      'card-statistics-data': CardStatisticsData.data,

      // Card Analytics
      'card-analytics-data': CardAnalyticsData.data,

      // Users
      'users-data': UsersFakeData.users,

      // Invoice
      'invoice-data': InvoiceFakeData.invoices,

      // Todo
      'todos-data': TodoFakeData.tasks,
      'todos-assignee': TodoFakeData.assignee,
      'todos-filters': TodoFakeData.filters,
      'todos-tags': TodoFakeData.tags,

      // Email
      'emails-data': EmailFakeData.emails,
      'email-folders': EmailFakeData.folders,
      'email-labels': EmailFakeData.labels,

      // E-Commerce
      'ecommerce-products': EcommerceFakeData.products,
      'ecommerce-relatedProducts': EcommerceFakeData.relatedProducts,
      'ecommerce-userWishlist': EcommerceFakeData.userWishlist,
      'ecommerce-userCart': EcommerceFakeData.userCart,

      // Chat
      'chat-profileUser': ChatFakeData.profileUser,
      'chat-contacts': ChatFakeData.contacts,
      'chat-chats': ChatFakeData.chats,

      // Chat Widget
      'chat-widget-data': ChatWidgetFakeData.data,

      // Calendar
      'calendar-events': CalendarFakeData.events,
      'calendar-filter': CalendarFakeData.calendar,

      // Search
      'search-data': SearchFakeData.search,

      // Notifications
      'notifications-data': NotificationsFakeData.data,

      // Dashboard
      'dashboard-data': DashboardFakeData.data
    };
  }
}
