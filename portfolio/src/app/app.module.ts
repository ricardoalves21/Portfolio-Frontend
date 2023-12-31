import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './portfolio/footer/footer.component';
import { SobreComponent } from './portfolio/sobre/sobre.component';
import { TrabalhosComponent } from './portfolio/trabalhos/trabalhos.component';
import { ContatoComponent } from './portfolio/contato/contato.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AncoraComponent } from './portfolio/ancora/ancora.component';
import { NavbarComponent } from './portfolio/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { LottieCacheModule } from 'ngx-lottie';
import { TecnologiasComponent } from './portfolio/tecnologias/tecnologias.component';
import { WhatsappComponent } from './portfolio/whatsapp/whatsapp.component';


export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SobreComponent,
    TrabalhosComponent,
    ContatoComponent,
    AncoraComponent,
    NavbarComponent,
    TecnologiasComponent,
    WhatsappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }), LottieCacheModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
