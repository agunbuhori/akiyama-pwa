import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  menus: any = [
    {link: '/', title: 'お知らせ'},
    {link: '/', title: 'お知らせ'},
    {link: '/', title: 'お知らせ'},
    {link: '/', title: 'お知らせ'},
    {link: '/', title: 'お知らせ'},
    {link: '/', title: 'お知らせ'},
    {link: '/', title: 'お知らせ'},
    {link: '/', title: 'お知らせ'},
    {link: '/', title: 'お知らせ'},
  ]

  ngOnInit() {
    new Swiper('.banner', {
      // Optional parameters
      loop: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    })

    new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView: 'auto',
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }

}
