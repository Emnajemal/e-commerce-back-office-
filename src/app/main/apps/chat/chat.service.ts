import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ChatService {
  public contacts: any[];
  public chats: any[];
  public userProfile;
  public isChatOpen: Boolean;
  public chatUsers: any[];
  public selectedChat;
  public selectedChatUser;

  public onContactsChange: BehaviorSubject<any>;
  public onChatsChange: BehaviorSubject<any>;
  public onSelectedChatChange: BehaviorSubject<any>;
  public onSelectedChatUserChange: BehaviorSubject<any>;
  public onChatUsersChange: BehaviorSubject<any>;
  public onChatOpenChange: BehaviorSubject<Boolean>;
  public onUserProfileChange: BehaviorSubject<any>;

  constructor(private _httpClient: HttpClient) {
    this.isChatOpen = false;
    this.onContactsChange = new BehaviorSubject([]);
    this.onChatsChange = new BehaviorSubject([]);
    this.onSelectedChatChange = new BehaviorSubject([]);
    this.onSelectedChatUserChange = new BehaviorSubject([]);
    this.onChatUsersChange = new BehaviorSubject([]);
    this.onChatOpenChange = new BehaviorSubject(false);
    this.onUserProfileChange = new BehaviorSubject([]);
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([
        this.getContacts(),
        this.getChats(),
        this.getUserProfile(),
        this.getActiveChats(),
        this.getChatUsers()
      ]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get Contacts
   */
  getContacts(): Promise<any[]> {
    const url = `api/chat-contacts`;

    return new Promise((resolve, reject) => {
      this._httpClient.get(url).subscribe((response: any) => {
        this.contacts = response;
        this.onContactsChange.next(this.contacts);
        resolve(this.contacts);
      }, reject);
    });
  }

  /**
   * Get Chats
   */
  getChats(): Promise<any[]> {
    const url = `api/chat-chats`;

    return new Promise((resolve, reject) => {
      this._httpClient.get(url).subscribe((response: any) => {
        this.chats = response;
        this.onChatsChange.next(this.chats);

        resolve(this.chats);
      }, reject);
    });
  }

  /**
   * Get User Profile
   */
  getUserProfile(): Promise<any[]> {
    const url = `api/chat-profileUser`;

    return new Promise((resolve, reject) => {
      this._httpClient.get(url).subscribe((response: any) => {
        this.userProfile = response;
        this.onUserProfileChange.next(this.userProfile);
        resolve(this.userProfile);
      }, reject);
    });
  }

  /**
   * Get Selected Chat User
   *
   * @param userId
   */
  getSelectedChatUser(userId) {
    const selectUser = this.contacts.find(contact => contact.id === userId);
    this.selectedChatUser = selectUser;

    this.onSelectedChatUserChange.next(this.selectedChatUser);
  }

  /**
   * Get Active Chats
   */
  getActiveChats() {
    const chatArr = this.chats.filter(chat => {
      return this.contacts.some(contact => {
        return contact.id === chat.userId;
      });
    });
  }

  /**
   * Get Chat Users
   */
  getChatUsers() {
    const contactArr = this.contacts.filter(contact => {
      return this.chats.some(chat => {
        return chat.userId === contact.id;
      });
    });
    this.chatUsers = contactArr;
    this.onChatUsersChange.next(this.chatUsers);
  }

  /**
   * Selected Chats
   *
   * @param id
   */
  selectedChats(id) {
    const selectChat = this.chats.find(chat => chat.userId === id);

    // If Chat is Avaiable of Selected Id
    if (selectChat !== undefined) {
      this.selectedChat = selectChat;

      this.onSelectedChatChange.next(this.selectedChat);
      this.getSelectedChatUser(id);
    }
    // Else Create New Chat
    else {
      const newChat = {
        userId: id,
        unseenMsgs: 0
      };
      this.onSelectedChatChange.next(newChat);
      this.getSelectedChatUser(id);
    }
  }

  /**
   * Create New Chat
   *
   * @param id
   * @param chat
   */
  createNewChat(id, chat) {
    const newChat = {
      userId: id,
      unseenMsgs: 0,
      chat: [chat]
    };

    if (chat.message !== '') {
      return new Promise<void>((resolve, reject) => {
        this._httpClient.post('api/chat-chats/', { ...newChat }).subscribe(() => {
          this.getChats();
          this.getChatUsers();
          this.getSelectedChatUser(id);
          this.openChat(id);
          resolve();
        }, reject);
      });
    }
  }

  /**
   * Open Chat
   *
   * @param id
   */
  openChat(id) {
    this.isChatOpen = true;
    this.onChatOpenChange.next(this.isChatOpen);
    this.selectedChats(id);
  }

  /**
   * Update Chat
   *
   * @param chats
   */
  updateChat(chats) {
    return new Promise<void>((resolve, reject) => {
      this._httpClient.post('api/chat-chats/' + chats.id, { ...chats }).subscribe(() => {
        this.getChats();
        resolve();
      }, reject);
    });
  }

  /**
   * Update User Profile
   *
   * @param userProfileRef
   */
  updateUserProfile(userProfileRef) {
    this.userProfile = userProfileRef;
    this.onUserProfileChange.next(this.userProfile);
  }
}
