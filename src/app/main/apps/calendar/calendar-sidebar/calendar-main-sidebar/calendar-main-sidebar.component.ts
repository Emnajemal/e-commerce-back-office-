import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { CalendarService } from 'app/main/apps/calendar/calendar.service';

@Component({
  selector: 'app-calendar-main-sidebar',
  templateUrl: './calendar-main-sidebar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CalendarMainSidebarComponent implements OnInit {
  // Public
  public calendarRef = [];
  public tempRef = [];
  public checkAll = true;

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   * @param {CalendarService} _calendarService
   */
  constructor(private _coreSidebarService: CoreSidebarService, private _calendarService: CalendarService) {}

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Event Sidebar
   */
  toggleEventSidebar() {
    this._coreSidebarService.getSidebarRegistry('calendar-event-sidebar').toggleOpen();
  }

  /**
   * Add Event
   *
   */
  AddEvent() {
    this.toggleEventSidebar();
    this._coreSidebarService.getSidebarRegistry('calendar-main-sidebar').toggleOpen();
    this._calendarService.createNewEvent();
  }

  /**
   * If all checkbox are checked : returns TRUE
   */
  allChecked() {
    return this.calendarRef.every(v => v.checked === true);
  }

  /**
   * Checkbox Change
   *
   * @param event
   * @param id
   */
  checkboxChange(event, id) {
    const index = this.calendarRef.findIndex(r => {
      if (r.id === id) {
        return id;
      }
    });
    this.calendarRef[index].checked = event.target.checked;
    this._calendarService.calendarUpdate(this.calendarRef);
    this.checkAll = this.allChecked();
  }

  /**
   * Toggle All Checkbox
   *
   * @param event
   */
  toggleCheckboxAll(event) {
    this.checkAll = event.target.checked;
    if (this.checkAll) {
      this.calendarRef.map(res => {
        res.checked = true;
      });
    } else {
      this.calendarRef.map(res => {
        res.checked = false;
      });
    }
    this._calendarService.calendarUpdate(this.calendarRef);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to Calendar changes
    this._calendarService.onCalendarChange.subscribe(res => {
      this.calendarRef = res;
    });
  }
}
