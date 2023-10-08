import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicService } from 'src/app/services/comic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comicPageSrc: string | undefined;
  comic: string | null = 'oks';
  volume: string | null = 'volume1';
  page: string | null = '0';

  @HostBinding('class.dark-mode') darkMode: boolean = false;

  constructor(
    private comicService: ComicService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.comic = this.route.snapshot.queryParamMap.has('comic')
      ? this.route.snapshot.queryParamMap.get('comic')
      : 'oks';
    this.volume = this.route.snapshot.queryParamMap.has('volume')
      ? this.route.snapshot.queryParamMap.get('volume')
      : 'volume1';


    this.route.queryParamMap.subscribe(queryParamMap => {
      this.page = queryParamMap.has('page')
      ? queryParamMap.get('page')
      : '0';
      this.getComicPage();
    });

  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }

  previousPage() {
    let page = parseInt(this.page!);
    page--;
    this.page = page.toString();
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: {'comic': this.comic, 'volume': this.volume, 'page': this.page}})
  }

  nextPage() {
    let page = parseInt(this.page!);
    page++;
    this.page = page.toString();
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: {'comic': this.comic, 'volume': this.volume, 'page': this.page}})
  }

  getComicPage(): void {
    this.comicService
      .getPage(this.comic!, this.volume!, this.page!)
      .subscribe((response) => {
        if (!!response.data) {
          this.comicPageSrc = response.data.url;
        }
      });
  }
}
