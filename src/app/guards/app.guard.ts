import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const appGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('NuToken')
  if (token) {
    return true;
  } else {
    router.navigate([''])
    return false
  }
};

export const appGuard2: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('NuToken')
  if (token) {
    router.navigate(['/nav/dashboard'])
    return false
  } else {
    return true;
  }
};
