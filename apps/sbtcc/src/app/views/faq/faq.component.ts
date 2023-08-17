import { Component, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'sbtcc-faq',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
  ],
  template: `
    <mat-accordion multi hideToggle displayMode="flat">
      <mat-expansion-panel expanded>
        <mat-expansion-panel-header>
          <mat-panel-title>
            FAQ 1 - Eiusmod sunt ea excepteur nulla
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>
          Consectetur qui incididunt aute incididunt do sunt velit. Dolor anim
          aliqua cupidatat sint laborum anim eiusmod eiusmod. Laboris ea qui qui
          aliquip dolore Lorem mollit Lorem. Esse deserunt proident velit
          aliquip ipsum voluptate nulla nostrud pariatur fugiat irure fugiat
          exercitation.
        </p>
        <p>
          Aute deserunt consectetur in sint aliquip. Consectetur esse velit
          pariatur aliquip qui laborum elit dolor in tempor mollit id aute
          reprehenderit commodo. Incididunt enim nisi laboris quis id ipsum
          sunt. Cupidatat excepteur culpa aute mollit consequat cupidatat
          laboris eiusmod esse velit. Mollit dolor amet fugiat ex cupidatat anim
          cillum.
        </p>
        <p>
          Amet labore proident excepteur exercitation consequat magna aliqua
          deserunt sit aute aliqua culpa deserunt Lorem. Elit veniam amet
          eiusmod aliquip laborum proident. Aute ad magna exercitation nisi.
          Dolor mollit minim tempor pariatur fugiat occaecat esse adipisicing eu
          quis consequat est.
        </p>
      </mat-expansion-panel>

      <mat-expansion-panel expanded>
        <mat-expansion-panel-header>
          <mat-panel-title>
            FAQ 2 - Deserunt dolor labore ipsum
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>
          Consectetur qui incididunt aute incididunt do sunt velit. Dolor anim
          aliqua cupidatat sint laborum anim eiusmod eiusmod. Laboris ea qui qui
          aliquip dolore Lorem mollit Lorem. Esse deserunt proident velit
          aliquip ipsum voluptate nulla nostrud pariatur fugiat irure fugiat
          exercitation.
        </p>
        <p>
          Aute deserunt consectetur in sint aliquip. Consectetur esse velit
          pariatur aliquip qui laborum elit dolor in tempor mollit id aute
          reprehenderit commodo. Incididunt enim nisi laboris quis id ipsum
          sunt. Cupidatat excepteur culpa aute mollit consequat cupidatat
          laboris eiusmod esse velit. Mollit dolor amet fugiat ex cupidatat anim
          cillum.
        </p>
        <p>
          Amet labore proident excepteur exercitation consequat magna aliqua
          deserunt sit aute aliqua culpa deserunt Lorem. Elit veniam amet
          eiusmod aliquip laborum proident. Aute ad magna exercitation nisi.
          Dolor mollit minim tempor pariatur fugiat occaecat esse adipisicing eu
          quis consequat est.
        </p>
      </mat-expansion-panel>

      <mat-expansion-panel expanded>
        <mat-expansion-panel-header>
          <mat-panel-title>
            FAQ 3 - Ex fugiat Lorem eiusmod nisi
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p>
          Consectetur qui incididunt aute incididunt do sunt velit. Dolor anim
          aliqua cupidatat sint laborum anim eiusmod eiusmod. Laboris ea qui qui
          aliquip dolore Lorem mollit Lorem. Esse deserunt proident velit
          aliquip ipsum voluptate nulla nostrud pariatur fugiat irure fugiat
          exercitation.
        </p>
        <p>
          Aute deserunt consectetur in sint aliquip. Consectetur esse velit
          pariatur aliquip qui laborum elit dolor in tempor mollit id aute
          reprehenderit commodo. Incididunt enim nisi laboris quis id ipsum
          sunt. Cupidatat excepteur culpa aute mollit consequat cupidatat
          laboris eiusmod esse velit. Mollit dolor amet fugiat ex cupidatat anim
          cillum.
        </p>
        <p>
          Amet labore proident excepteur exercitation consequat magna aliqua
          deserunt sit aute aliqua culpa deserunt Lorem. Elit veniam amet
          eiusmod aliquip laborum proident. Aute ad magna exercitation nisi.
          Dolor mollit minim tempor pariatur fugiat occaecat esse adipisicing eu
          quis consequat est.
        </p>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }

      .mat-expansion-panel-header-title {
        font-size: 18px;
        font-weight: 700;
      }
    `,
  ],
})
export class FaqComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion();
}
