import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { authInterceptorProviders } from './services/auth.interceptor';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { UpdateQuestionComponent} from "./pages/admin/update-question/update-question.component";
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { AngularFireModule } from "@angular/fire";
import {QuizLevelComponent} from "./pages/user/quiz-level/quiz-level.component";
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

import {
  AngularFireStorageModule,
} from "@angular/fire/storage";
import { environment } from 'src/environments/environment.prod';
import {NgxPaginationModule} from "ngx-pagination";
import {MatDividerModule} from "@angular/material/divider";
import {StartListeningExamComponent} from "./pages/user/startListeningExam/startListeningExam.component";
import { LoaderComponent } from './loader/loader.component';
import { TestComponent } from './pages/user/test/test.component';
import { VideosComponent } from './pages/videos/videos.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HskComponent } from './pages/hsk/hsk.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    UserSidebarComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    StartListeningExamComponent,
    QuizLevelComponent,
    QuizLevelCreateComponent,
    QuizLevelViewComponent,
    LevelDocViewComponent,
    AddDocumentComponent,
    LevelDocViewUpdateComponent,
    LevelDocViewUpdateCategories,
    ViewDocumentsComponent,
    UpdateDocumentComponent,
    ViewDocumentLevelComponent,
    ViewCategoryDocument,
    ViewDocumentsUserComponent,
    ViewDocumentComponent,
    LoaderComponent,
    TestComponent,
    VideosComponent,
    PostsComponent,
    HskComponent


  ],
  imports: [
    MatDividerModule,
    [NgxPaginationModule],
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    //hiện loading xuay xuay khi chuyển trang
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule


  ],
  //cái này là thêm token đính kèm mỗi lần gửi request
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  //thêm cái schemas này để đỡ thông báo lội đoạn ngx ui loader, vòng xoay xoay khi load trang web
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
