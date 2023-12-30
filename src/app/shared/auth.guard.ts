import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,CanActivate,RouterStateSnapshot,UrlTree,Router } from "@angular/router";
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class authGuard implements CanActivate{
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(localStorage.getItem('logindata')){
        return true;
   }
    else{
      this.router.navigate(["/"])
      alert("you can't access this page without login")
      return false;
    }
  }
}
