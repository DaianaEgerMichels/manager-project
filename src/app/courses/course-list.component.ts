import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 129.97,
                code: 'RPG-1777',
                duration: 120,
                rating: 4.7,
                releaseDate: '25/07/19'

            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 89.90,
                code: 'RXG-6679',
                duration: 80,
                rating: 4.3,
                releaseDate: '17/05/17'

            }
        ]
    }
}