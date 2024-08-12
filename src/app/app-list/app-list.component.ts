import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Item {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.sass'],
  imports: [CommonModule, FormsModule],
})
export class AppListComponent implements OnInit {
  @Input() items: Item[] = [];
  filteredItems: Item[] = [];
  searchQuery: string = '';

  ngOnInit() {
    if (this.items.length === 0) {
      this.items = [
        { id: 1, name: 'Item 1', description: 'Description 1' },
        { id: 2, name: 'Item 2', description: 'Description 2' },
        { id: 3, name: 'Item 3', description: 'Description 3' },
        { id: 4, name: 'Item 4', description: 'Description 4' },
        { id: 5, name: 'Item 5', description: 'Description 5' },
      ];
    }
    this.filteredItems = [...this.items];
  }

  trackById(index: number, item: Item): number {
    return item.id;
  }

  onSearch(query: string) {
    this.searchQuery = query.toLowerCase();
    this.filteredItems = this.items.filter(
      (item) =>
        item.name.toLowerCase().includes(this.searchQuery) ||
        item.description.toLowerCase().includes(this.searchQuery)
    );
  }

  onNameChange(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.items[index].name = input?.value || ''; // Use optional chaining and default value
    this.filteredItems = [...this.items]; // Refresh filteredItems to reflect changes
  }

  onDescriptionChange(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.items[index].description = input?.value || ''; // Use optional chaining and default value
    this.filteredItems = [...this.items]; // Refresh filteredItems to reflect changes
  }
}
