## Two Component we have.
    - First Component.
        -We have a form and button.
    - Second Component.

## What we need to do if we enter something in the form which is there in First Component and dont save and try to chnage the route.
    - Then Show warning message.

# what we did.
    - We have created a guard and implemented canDeactivatedGuard.
    - And the guard function implementation we use a function which is there in First Compoent
            -Component function return True/false based on form validation.
    - If we get true from compoent function then in guard we retrun true and message and respictively.
