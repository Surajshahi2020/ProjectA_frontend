#include <stdio.h>
#include <conio.h>
#include <unistd.h>

void main(){
    int hours, minutes, seconds;
    printf("enter initial time(hh:mm:ss)");
    scanf("%d:%d:%d", &hours, &minutes, &seconds);
    while(1){
        printf("\r%02d:%02d:%02d", hours, minutes, seconds);
        fflush(stdout);
        seconds++;
        if (seconds==60){
            seconds=0;
            minutes++;
            if (minutes==60){
                minutes=0;
                hours++;
                if (hours==24){
                    hours=0;
                }
            }
        }
        sleep(1);
    }
    getch();
}
