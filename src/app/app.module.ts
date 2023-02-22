import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ImagePlaceholderComponent } from './components/image-placeholder/image-placeholder.component';
import { ResultsComponent } from './components/results/results.component';
import { ImageSrcDirective } from './directives/image-src.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImagePlaceholderComponent,
    ResultsComponent,
    ImageSrcDirective,
    // NgOptimizedImage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
