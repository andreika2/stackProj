import {Component, Input, OnDestroy, OnInit, Self} from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import {
  DEFAULT_REDIRECT_URL,
  DEFAULT_SEARCH_STRING,
  SEARCH_FORM_GROUP,
  SEARCH_PANEL_KEY
} from "./shared-search-panel.component.entity";
import { takeUntil } from "rxjs/operators";
import { SharedSearchPanelService } from "./shared-search-panel.service";

@Component({
  selector: 'app-shared-search-panel',
  templateUrl: './shared-search-panel.component.html',
  styleUrls: ['./shared-search-panel.component.scss'],
  providers: [ SharedSearchPanelService ]
})
export class SharedSearchPanelComponent implements OnInit, OnDestroy {

  @Input() public redirectUrl = DEFAULT_REDIRECT_URL;

  public searchString: string = DEFAULT_SEARCH_STRING;

  readonly searchControlName: string = SEARCH_PANEL_KEY;
  readonly searchPanelForm: FormGroup = SEARCH_FORM_GROUP;
  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(@Self() readonly sharedSearchPanelService: SharedSearchPanelService) { }

  public ngOnInit(): void {
    this.initSearchPanelForm();
  }

  private initSearchPanelForm(): void {
    this.searchPanelForm
      .get(this.searchControlName)?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((searchString: string) => this.searchString = searchString);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
