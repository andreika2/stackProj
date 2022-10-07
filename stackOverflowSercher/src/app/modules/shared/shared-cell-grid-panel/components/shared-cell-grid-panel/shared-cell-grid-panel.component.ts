import {
  ChangeDetectorRef,
  Component,
  ComponentFactory,
  ComponentFactoryResolver, EventEmitter,
  Input, OnDestroy,
  OnInit, Output, Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  CELL_TYPES_MAP, DEFAULT_CELL_CONFIG_OPTIONS,
  DEFAULT_CONTAINER_VALUE,
  ICellConfigOptions, ITypeCellComponent
} from "./shared-cell-grid-panel.entity";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-shared-cell-grid-panel',
  templateUrl: './shared-cell-grid-panel.component.html',
  styleUrls: ['./shared-cell-grid-panel.component.scss']
})
export class SharedCellGridPanelComponent implements OnInit, OnDestroy {

  @Input() public cellConfigOptions: ICellConfigOptions<unknown> = DEFAULT_CELL_CONFIG_OPTIONS;
  @Output() public cellEmitData: EventEmitter<unknown> = new EventEmitter<unknown>();

  @ViewChild("cellType", { read: ViewContainerRef, static: true })
  private cellTypeContainer: ViewContainerRef = DEFAULT_CONTAINER_VALUE;

  private readonly destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly resolver: ComponentFactoryResolver) {}

  public ngOnInit(): void {
    this.injectComponent();
  }

  private injectComponent(): void {
    const factory = this.getResolveFactory();
    const ref = this.cellTypeContainer.createComponent<ITypeCellComponent<unknown, unknown>>(factory);
    ref.instance.configOptions = this.cellConfigOptions;
    this.subscribeToEmmitData(ref.instance);
    ref.injector.get<ChangeDetectorRef>(ChangeDetectorRef).markForCheck();
  }

  private getResolveFactory(): ComponentFactory<ITypeCellComponent<unknown, unknown>> {
    const chartType = CELL_TYPES_MAP.get(this.cellConfigOptions.cellType) as Type<ITypeCellComponent<unknown, unknown>>;
    return this.resolver.resolveComponentFactory(chartType);
  }

  private subscribeToEmmitData({ cellEmitData }: ITypeCellComponent<unknown, unknown>): void {
    if (cellEmitData) {
      cellEmitData.pipe(
        takeUntil(this.destroy$)
      ).subscribe(emmitData => this.cellEmitData.emit(emmitData))
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
