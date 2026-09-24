import { Component, inject, signal } from '@angular/core';
import { TaskPromiseService } from '../../../services/task-promise.service';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/task.model';
import { NgModel } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-ex-task-list-fb',
  styleUrl: './ex-task-list-fb.css',
  templateUrl: './ex-task-list-fb.html',
})
export class ExTaskListFb {
  private taskService=inject(TaskPromiseService);

  // 1. Déclaration des Signals
  tasks=signal<Task[]>([]);
  newTaskTitle=signal<string>('');

  async ngOnInit(): Promise<void>{
    await this.loadTasks();
  }

  // 2. Chargement des données
  async loadTasks():Promise<void>{
    const data=await this.taskService.getTasks()
    this.tasks.set(data);
  }

  // 3. Ajout d'une tâche
  async addTask():Promise<void> {
    if(this.newTaskTitle()===""){
      return ;
    }
    const newTask:Task={
      title: this.newTaskTitle(),
      status:"pending",
    }
    this.taskService.addTask(newTask);
    this.newTaskTitle.set('');
  }

  // 4. Suppression
  async deleteTask(taskId:string):Promise<void>{
    try{
      await this.taskService.deleteTask(taskId);
      await this.loadTasks();
    }catch(err){
      console.error('Erreur de supression de la tache :',err);
    }
  }

  // 5. Modification du statut
  async toggleStatus(task:Task):Promise<void>{

  }

}
