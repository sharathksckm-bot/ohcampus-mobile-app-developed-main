import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { MocktestService } from '../../services/mocktest.service';

@Component({
  selector: 'app-mocktest-auth',
  templateUrl: './mocktest-auth.page.html',
  styleUrls: ['./mocktest-auth.page.scss'],
})
export class MocktestAuthPage implements OnInit {
  isLogin = true;
  email = '';
  password = '';
  confirmPassword = '';
  name = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private mocktestService: MocktestService
  ) { }

  ngOnInit() {
    if (this.mocktestService.isAuthenticated()) {
      this.router.navigate(['/mocktest']);
    }
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.clearForm();
  }

  clearForm() {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.name = '';
  }

  async submit() {
    if (!this.validateForm()) {
      return;
    }

    const loading = await this.loadingController.create({
      message: this.isLogin ? 'Logging in...' : 'Creating account...',
      spinner: 'crescent'
    });
    await loading.present();

    if (this.isLogin) {
      this.mocktestService.login(this.email, this.password).subscribe({
        next: async (response) => {
          await loading.dismiss();
          this.showToast('Login successful!');
          this.router.navigate(['/mocktest']);
        },
        error: async (error) => {
          await loading.dismiss();
          this.showError('Login failed. Please check your credentials.');
        }
      });
    } else {
      this.mocktestService.register(this.email, this.password, this.name).subscribe({
        next: async (response) => {
          await loading.dismiss();
          this.showToast('Account created successfully!');
          this.router.navigate(['/mocktest']);
        },
        error: async (error) => {
          await loading.dismiss();
          this.showError('Registration failed. Please try again.');
        }
      });
    }
  }

  validateForm(): boolean {
    if (!this.email || !this.password) {
      this.showError('Please fill in all required fields');
      return false;
    }

    if (!this.isValidEmail(this.email)) {
      this.showError('Please enter a valid email address');
      return false;
    }

    if (this.password.length < 6) {
      this.showError('Password must be at least 6 characters');
      return false;
    }

    if (!this.isLogin) {
      if (!this.name) {
        this.showError('Please enter your name');
        return false;
      }
      if (this.password !== this.confirmPassword) {
        this.showError('Passwords do not match');
        return false;
      }
    }

    return true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async showError(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }

  goBack() {
    this.router.navigate(['/mocktest']);
  }
}
