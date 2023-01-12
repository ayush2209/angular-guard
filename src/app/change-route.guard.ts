import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirstComponent } from './first/first.component';

@Injectable({
  providedIn: 'root'
})
export class ChangeRouteGuard implements CanDeactivate<FirstComponent> {
  canDeactivate(component: FirstComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (component.hasUnsavedData()) {
      if (confirm("You have unsaved changes! If you leave, your changes will be lost.")) {
        return false
      } else {
        return false;
      }
    } else {}
    return true;
  }

}
