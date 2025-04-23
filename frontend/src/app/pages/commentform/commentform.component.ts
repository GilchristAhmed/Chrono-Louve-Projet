import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { CommentService } from '../../core/services/comment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commentform',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './commentform.component.html',
  styleUrl: './commentform.component.scss'
})
export class CommentformComponent {
  commentForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private commentService: CommentService) {
    this.commentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  submit(): void {
    this.submitted = true;
    if (this.commentForm.invalid) return;

    this.commentService.addComment(this.commentForm.value).subscribe({
      next: () => {
        alert('Commentaire envoyé !');
        this.commentForm.reset();
        this.submitted = false;
      },
      error: (err) => console.error(err)
    });
  }
}
