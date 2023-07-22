import { LoginGuard } from './login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import {UpdateQuestionComponent} from "./pages/admin/update-question/update-question.component";
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserGuard } from './user.guard';
import { StartListeningExamComponent} from "./pages/user/startListeningExam/startListeningExam.component";
import { QuizLevelComponent} from "./pages/user/quiz-level/quiz-level.component";
import {QuizLevelCreateComponent} from "./pages/admin/quiz-level-create/quiz-level-create.component";
import {QuizLevelViewComponent} from "./pages/admin/quiz-level-view/quiz-level-view.component";
import {LevelDocViewComponent} from "./pages/admin/level-doc-view-create/level-doc-view.component";
import {AddDocumentComponent} from "./pages/admin/add-document/add-document.component";
import {LevelDocViewUpdateComponent} from "./pages/admin/level-doc-view-update/level-doc-view-update.component";
import {LevelDocViewUpdateCategories} from "./pages/admin/level-doc-view-update-categories/level-doc-view-update-categories";
import {ViewDocumentsComponent} from "./pages/admin/view-documents/view-documents.component";
import {UpdateDocumentComponent} from "./pages/admin/update-document/update-document.component";
import {ViewDocumentLevelComponent} from "./pages/user/view-document-level/view-document-level.component";
import {ViewCategoryDocument} from "./pages/user/view-category-document/view-category-document";
import {ViewDocumentsUserComponent} from "./pages/user/view-documents/view-documents-user.component";
import {ViewDocumentComponent} from "./pages/user/view-document/view-document.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {TestComponent} from "./pages/user/test/test.component";
import {VideosComponent} from "./pages/videos/videos.component";
import {PostsComponent} from "./pages/posts/posts.component";
import {HskComponent} from "./pages/hsk/hsk.component";

// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'hsk',
        component: HskComponent
      },
      {
        path: 'video',
        component: VideosComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      // {
      //   path:'navbar',
      //   component: NavbarComponent
      // },
      {
        path: 'profile',
        component: ProfileComponent
      },
      // {
      //   path:'profile',
      //   component:ProfileComponent,
      //   canActivate:[LoginGuard]
      // },
    ]
  },
  {
    path:'admin',
    component:AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:HomeComponent
      },

      {
        path:'categories',
        component:ViewCategoriesComponent
      },
      {
        path: 'level-doc-view-update-categories',
        component: LevelDocViewUpdateCategories
      },
      {
        path:'add-category',
        component:AddCategoryComponent
      },
      {
        path:'profile',
        component:ProfileComponent,

      },
      {
        path:'quizzes/:cateId/:type',
        component:ViewQuizzesComponent
      },
      {
        path: 'quiz-level-view',
        component: QuizLevelViewComponent
      },
      {
        path: 'view-document/:cateId/:type',
        component: ViewDocumentsComponent
      },
      {
        path: 'level-doc-view',
        component: LevelDocViewComponent
      },
      {
        path: 'level-doc-view-update',
        component: LevelDocViewUpdateComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'add-document',
        component: AddDocumentComponent
      },
      {
        path: 'quiz-level',
        component: QuizLevelCreateComponent
      },
      {
        path:'quiz/:id',
        component:UpdateQuizComponent
      },
      {
        path: 'view-questions/:id',
        component: UpdateQuestionComponent
      },
      {
        path: 'view-document/:id',
        component: UpdateDocumentComponent
      },
      {
        path:"view-questions/:quizId/:title",
        component:ViewQuizQuestionsComponent
      },
      {
        path:"add-question/:quizId/:quizTitle",
        component:AddQuestionComponent
      }
    ]
  },
  {
    path:"user-dashboard",
    component:UserDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path: 'video',
        component: VideosComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'hsk',
        component: HskComponent
      },
      {
        path: "only-view-document/:id",
        component: ViewDocumentComponent
      },
      {
        path:":level/:cateId",
        component:LoadQuizComponent
      },
      {
        path: "test",
        component: TestComponent
      },
      {
        path:"",
        component:HomeComponent
      },
      {
        path: "view-document-user/:cateId/:type",
        component: ViewDocumentsUserComponent
      },
      {
       path: 'view-category-document',
       component: ViewCategoryDocument
      },
      {
        path: "document",
        component: ViewDocumentLevelComponent
      },
      {
        path:'profile',
        component:ProfileComponent,

      },
      {
        path:"instructions/:quizId/:cateId",
        component:InstructionsComponent
      },
      {
        path:"quiz-level/:cateId",
        component: QuizLevelComponent
      }


      // {
      //   path:"start/:quizId",
      //   component:StartListeningExamComponent
      // }
    ]

  },
  {
    path:"start/:quizId",
    component:StartComponent
  },
  {
    path:"startListeningExam/:quizId/:cateId",
    component:StartListeningExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
